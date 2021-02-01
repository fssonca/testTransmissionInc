// import {url_host} from './variables'; 

const url_host="http://localhost:8000/api/"

export async function AjaxPost(api: string, obj: object): Promise<void> {
    const response = await fetch(url_host + api, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
       return body;
    }