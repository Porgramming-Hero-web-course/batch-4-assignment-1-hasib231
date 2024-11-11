{

interface Profile {
    name: string;
    age: number;
    email: string;
}

// using the Partial utility for pass the partial object of the main object
function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    return { ...profile, ...updates };
}


}