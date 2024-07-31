const likesApi = {
    like: async (dogId) => {
        const response = await fetch(`http://localhost:3030/jsonstore/dogs/${dogId}/like`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Include authentication headers if necessary
            }
        });

        if (!response.ok) {
            throw new Error('Failed to like the dog');
        }

        const updatedDog = await response.json();
        return updatedDog;
    }
};

export default likesApi;