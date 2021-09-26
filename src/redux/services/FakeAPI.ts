class FakeAPI{

    public static loadAuthentication(){
        return new Promise(async(resolve)=>{
            setTimeout(() => {
                resolve({
                    token: "asdklqjqwodiwqj",
                    user: {
                        name: "Alex",
                        linkedIn: "",
                        description: ""
                    }
                });
            }, 2000);
        });
    }

}

export { FakeAPI }