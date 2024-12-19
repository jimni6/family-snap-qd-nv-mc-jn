import React, { useEffect, useState } from 'react';
import {supabase} from "../supabaseClient.ts";

// Define the structure of a Photo object
type Photo = {
    id: string; // UUID
    url: string;
};

type PhotosProps = {
    eventId: string; // UUID of the event to filter photos
};

const Photos: React.FC<PhotosProps> = ({ eventId }) => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from('photos')
                    .select('id, url')
                    .eq('event_id', eventId); // Filter by event_id

                if (error) {
                    throw new Error(error.message);
                }

                setPhotos(data || []); // Default to an empty array if no data
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchPhotos();
    }, [eventId]); // Re-run the effect if eventId changes

    if (loading) return <p>Loading photos...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {photos.map((photo) => (
                    <img
                        key={photo.id}
                        src={photo.url}
                        alt={`Photo ${photo.id}`}
                        style={{ width: '150px', height: 'auto', borderRadius: '8px' }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Photos;
