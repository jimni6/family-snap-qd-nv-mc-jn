import React, {useState, useRef} from "react";
import Webcam from "react-webcam";
import {supabase} from '../supabaseClient.ts';
import {Link} from "react-router-dom";


type UploadPhotoProps = {
    eventId: string | undefined; // UUID of the event to filter photos
};



const UploadPhoto: React.FC<UploadPhotoProps> = ({eventId}) => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string | null>(null);
    const [usingWebcam, setUsingWebcam] = useState(false);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);

    const webcamRef = useRef<Webcam>(null);

    const getUserId = async () => {
        const { data, error } = await supabase.auth.getUser();

        if (error) {
            console.error('Error fetching user:', error.message);
            return;
        }

        if (data?.user) {
            const userId = data.user.id; // Get the user's unique ID
            console.log('Authenticated User ID:', userId);
            return userId;
        } else {
            console.log('No user is authenticated.');
            return null;
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
            setCapturedImage(null);
        }
    };

    const capturePhoto = () => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            setCapturedImage(imageSrc || null);
            setSelectedFile(null); // Reset selected file if switching to webcam capture
        }
    };

    const uploadPhoto = async () => {
        if (!selectedFile && !capturedImage) {
            setUploadStatus("Veuillez sélectionner un fichier ou capturer une photo.");
            return;
        }

        try {

            let fileName: string;
            let fileData: Blob;

            if (capturedImage) {
                fileName = `webcam-${Date.now()}.png`;
                fileData = await fetch(capturedImage).then((res) => res.blob());
            } else if (selectedFile) {
                fileName = selectedFile.name;
                fileData = selectedFile;
            } else {
                return;
            }
            // Étape 1 : Upload vers Supabase Storage
            const {error: uploadError} = await supabase.storage
                .from("photos") // Nom du bucket de stockage dans Supabase
                .upload(fileName, fileData);

            if (uploadError) {
                throw uploadError;
            }


            // Étape 2 : Obtenir l'URL publique
            const {data: publicUrlData} = supabase.storage.from("photos").getPublicUrl(fileName);
            const photoUrl = publicUrlData.publicUrl;

            // Étape 3 : Insérer l'URL dans la table 'photos'
            const {data, error} = await supabase
                .from("photos") // Nom de la table de photos dans Supabase
                .insert([
                    {
                        url: photoUrl, 
                        created_at: new Date().toISOString(),
                        event_id: eventId,
                        uploaded_by: await getUserId()
                    },
                ])
                .select();

            if (error) {
                alert('Insert failed');
            } else {
                setUploadStatus("Photo uploaded and saved successfully!");
                console.log('Upload réussi:', data);
            }
        } catch (error: any) {
            setUploadStatus(`Erreur : ${error.message}`);
        }
    };

    return (
        <div>
            <div>

                <button className="button" onClick={() => setUsingWebcam(false)}>Download a file</button>
                <button className="button" onClick={() => setUsingWebcam(true)}>Take a photo</button>

            </div>

            {usingWebcam ? (
                <div>
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/png"
                    />
                    <button className="button" onClick={capturePhoto}>Capture</button>
                </div>
            ) : (
                <button className="button" onClick={() => setUsingWebcam(false)}>  <input type="file" accept="image/*" onChange={handleFileChange} /></button>

            )}

            {capturedImage && (
                <div>
                    <p>Photo captured :</p>
                    <img src={capturedImage} alt="Captured" style={{ width: "100%" }} />
                </div>
            )}

            <button className="button" id="create" onClick={uploadPhoto} disabled={!selectedFile && !capturedImage}>
                Upload
            </button>

            <Link to={`/feed/${eventId}`}><button className="button">
                Retour
            </button></Link>
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
};

export default UploadPhoto;
