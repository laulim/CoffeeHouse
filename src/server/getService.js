
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
    const res = await fetch("http://localhost:3001/contacts", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Accept': 'application/json', "Content-Type": "application/json"}
    })

    if(!res.ok) {
      throw res.status;
    }

    return res;
  }

}

export default GetService