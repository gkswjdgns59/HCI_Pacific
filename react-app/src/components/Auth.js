
class Auth{
    static auth = '';
    static getAuth(){
        return `/${this.auth}`;
    }
    static login(id){
        localStorage.setItem('id', id);
        this.auth = id;
    }
    static logout(){
        localStorage.clear()
        this.auth='';
    }
}

export default Auth;