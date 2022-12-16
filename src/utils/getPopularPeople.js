import { API_Key, client } from './getData'

class getPopularPeople {

    getPeople() {
        let response = client.get(`person/popular?api_key=${API_Key}`)
        .then(ress => {
            return ress
        })
        .catch(err => {
            return err
        })
        return response
    }

    getPeopleDetail(id) {
        let response = client.get(`person/${id}?api_key=${API_Key}`)
        .then(ress => {
            return ress
        })
        .catch(err => {
            return err
        })
        return response
    }
}

export default new getPopularPeople()
