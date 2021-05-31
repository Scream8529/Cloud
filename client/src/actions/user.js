import axios from 'axios'


export const registration = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/registration', { email, password })
            .then(response => { 
                alert(response.data.message)
            })
    } catch (error) {
        alert(error.response.data.message)
    }
}