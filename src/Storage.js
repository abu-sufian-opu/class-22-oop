
class Storage {

    static has(key) {
        return localStorage.getItem(key) ? localStorage.getItem(key) : false;
    }

    static get(key) {
        if (this.has(key)) {
           return JSON.parse(this.has(key))
        }else{
            return 'Data not found'
        }
    }

    static set(key, data) {
        let staff_data = [];

        if (this.has(key)) {
            staff_data = JSON.parse(this.has(key));
        }

        staff_data.push(data);
        localStorage.setItem(key, JSON.stringify(staff_data));
    }
}
export default Storage;