
import * as React from 'react';


class ApplicationApi {

    async getVersions(requestOptions?: { headers: Headers; }): Promise<Application[] |  String[] | any> {
        console.log("getVersions ");
        const request = new Request('http://api.sweatthis.com/api/application/version');
        const response = await fetch(request);
        // console.log(response);
        var data = await response.json();
        // console.log(data);

        return data;
    }
    async getCurrentVersion()  {
        console.log("getCurrentVersion ");
        const request = new Request('http://api.sweatthis.com/api/application/version/');
        const response = await fetch(request);
        // console.log("api current1 : ",response);
        
        var data = await response.json();
        // console.log("api current2 : ",data[0]);

        return data[0].currentVersion;
    }
}

export default new ApplicationApi();