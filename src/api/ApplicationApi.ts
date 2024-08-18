
import * as React from 'react';


class ApplicationApi {

    async getVersions(requestOptions?: { headers: Headers; }): Promise<Application[] | String[] | any> {
        console.log("getVersions ");
        const request = new Request('http://api.sweatthis.com/api/application/version');
        const response = await fetch(request);
        var data = await response.json();

        return data;
    }
    async getCurrentVersion() {
        try {
            const request = new Request('http://api.sweatthis.com/api/application/version/');
            const response = await fetch(request);
            var data = await response.json();

            return data[0].currentVersion;
        }
        catch (e) {
            console.log("ERROR : ", e);
            return "Server Down";
        }
    }
}

export default new ApplicationApi();