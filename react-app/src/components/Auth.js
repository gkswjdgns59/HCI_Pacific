
class Auth{
    static auth = '';
    static getAuth(){
        return `/${this.auth}`;
    }
    static login(id){
        sessionStorage.setItem('id', id);
        this.auth = id;
    }
}

export default Auth;