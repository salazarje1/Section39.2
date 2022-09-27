const App = () => {
    return <div>
        <Tweet username="DogLver12" name="Dan" date="12-22-2001" message="I love dogs" />
        <Tweet username="CatH8r" name="Mark" date="12-23-2001" message="Dogs are way better!" />
        <Tweet username="Lillie1232" name="Ly" date="12-23-2001" message="Your crazy, Cats are way better" />
    </div>
}

ReactDOM.render(<App />, document.getElementById('root')); 