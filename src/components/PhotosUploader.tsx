import React, {useState} from "react";
import {supabase} from '../supabaseClient.ts';

type UploadPhotoProps = {
    eventId: string | undefined; // UUID of the event to filter photos
};



const UploadPhoto: React.FC<UploadPhotoProps> = ({eventId}) => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);

            console.log("Fichier sélectionné:", File);
        }
    };

    const uploadPhoto = async () => {
        if (!selectedFile) {
            setUploadStatus("Veuillez sélectionner un fichier.");
            return;
        }

        try {
            // Étape 1 : Upload vers Supabase Storage
            const fileName = selectedFile.name;
            console.log(fileName);

            const {error: uploadError} = await supabase.storage
                .from("photos") // Nom du bucket de stockage dans Supabase
                .upload(fileName, selectedFile);

            if (uploadError) {
                console.log(uploadError)
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
                        url: photoUrl, // Insertion de l'URL de la photo
                        created_at: new Date().toISOString(),
                        event_id: eventId
                    },
                ])
                .select();

            if (error) {
                alert('Insert failed');
                console.log(data, error);
            } else {
                setUploadStatus("Photo téléchargée et enregistrée avec succès !");
                console.log('Upload réussi:', data);
            }
        } catch (error: any) {
            setUploadStatus(`Erreur : ${error.message}`);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange}/>
            <button className="button" id="create" onClick={uploadPhoto} disabled={!selectedFile}>
                Upload
            </button>
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
};

export default UploadPhoto;