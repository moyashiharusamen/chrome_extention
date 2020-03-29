fetch("https://api.github.com/users/moyashiharusamen/repos")
    .then((res) => {
        return res.json();
    })
    .then((json) => {
        const jsonL = json.length;

        for (let i = 0; i < jsonL; i++) {
            const commitUrl = json[i].commits_url.replace('{/sha}', '');

            fetch(commitUrl)
                .then((inRes) => {
                    return inRes.json()
                })
                .then((inJson) => {
                    console.log(inJson);
                })
        }
    })