class LocalStorageHandler{
    private nameKey: string;

    constructor(nameKey:string){
        this.nameKey = nameKey;
    }

    public get(){
        let existLocalStorage = LocalStorageHandler.verifyExistLocalStorage(this.nameKey);

        if(existLocalStorage){
            let response = String(localStorage.getItem(this.nameKey));

            if(LocalStorageHandler.responseIsNotEmpty(response)){
                return LocalStorageHandler.stringToJSON(response);
            }else{
                return LocalStorageHandler.RESPONSE_DEFAULT;
            }
        }else{
            this.set("");
            return LocalStorageHandler.RESPONSE_DEFAULT;
        }
    }

    public set(data:string){
        localStorage.setItem(this.nameKey, data);
    }

    public static verifyExistLocalStorage(nameKey:string){
        return localStorage.getItem(nameKey) !== null;
    }

    public static stringToJSON(buffer:string){
        return JSON.parse(buffer);
    }

    public static JSONToString(buffer:any){
        return JSON.stringify(buffer);
    }

    public static responseIsNotEmpty(response: string){
        return Number(response.length) > 0;
    }

    public static readonly KEY_AUTH = "auth";

    public static readonly RESPONSE_DEFAULT = null;

    public static instanceAuth = new LocalStorageHandler(LocalStorageHandler.KEY_AUTH);
}

export { LocalStorageHandler };