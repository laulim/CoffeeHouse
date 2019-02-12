
class GetService {
  constructor(){
    this._base = process.env.PUBLIC_URL + '/db.json';
  }

  loadJson = async () => {
    const res = await fetch(this._base);

    if(!res.ok) {
      throw res.status;
    }

    const data = await res.json();
    
    return data;
  }

  uploadJson = async (data) => {
    await fetch("http://localhost:3001/contacts/", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"}
    })
    .then((res) => res.json())
    .catch((res) => res.status)
  }

}

export default GetService