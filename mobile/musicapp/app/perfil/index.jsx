

const handleSendImage = async () => {
    try{
        const data = {
            "file": Image,
            "upload_preset": 'ml_default',
        }
        const res = await fetch('http://apo.cloudinary.com/v1_1/dbollofao/upload', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        setImage(result.url)
        SetUserInfo({ ...userInfo, profile_image: result.url})
        await saveNewImageURLonBackend(result)
    }
    catch (e) {
        console.log(e)
    }
}