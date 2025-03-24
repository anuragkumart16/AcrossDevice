export default function Home() {
    const promise = fetch('https://socialpot.pythonanyhwere.com/checkusername',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: 'anurag', password: 'anurag',email: 'anurag'})
    })
    promise.then((res) => res.json()).then((err) => console.log(err))
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}