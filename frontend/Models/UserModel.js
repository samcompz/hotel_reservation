const User = () => {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    profileImage: string;
    createdAt: Date;
    updatedAt: Date;

    addUser = async (user) => {
        this.users.push(user);
    }

    removeUser = async (user) => {
        const index = this.users.indexOf(user);
        if (index !== -1) {
            this.users.splice(index, 1);
        }
    }
}
