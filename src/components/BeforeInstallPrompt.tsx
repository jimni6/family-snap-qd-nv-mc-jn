import React, { useEffect, useState } from 'react';

const AddToHomeScreen: React.FC = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Define the BeforeInstallPromptEvent interface
    interface BeforeInstallPromptEvent extends Event {
        prompt: () => void;
        userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
    }

    useEffect(() => {
        const handleBeforeInstallPrompt = (event: Event) => {
            // Prevent the mini-infobar from appearing
            event.preventDefault();
            setDeferredPrompt(event as BeforeInstallPromptEvent); // Save the event
            setIsVisible(true); // Show the custom "Add to Home Screen" button
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleAddToHomeScreen = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt(); // Show the browser prompt

            const choiceResult = await deferredPrompt.userChoice;
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }

            setDeferredPrompt(null); // Reset the prompt
            setIsVisible(false); // Hide the button after interaction
        }
    };

    return (
        <div>
            {isVisible && (
                <button onClick={handleAddToHomeScreen} style={{ padding: '10px 20px', fontSize: '16px' }}>
                    Add to Home Screen
                </button>
            )}
        </div>
    );
};

export default AddToHomeScreen;
