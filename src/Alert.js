
class Alert {

    static danger(msg) {
        return `<p class="alert alert-danger d-flex justify-content-between"> ${msg} <button class="btn-close btn-sm" data-bs-dismiss="alert"></button></p>`
    }
    static success(msg) {
        return `<p class="alert alert-success d-flex justify-content-between"> ${msg} <button class="btn-close btn-sm" data-bs-dismiss="alert"></button></p>`
    }
}
export default Alert;