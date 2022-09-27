const App = () => (
    <div>
        <Person name="josue" age="30" hobbies={['playing guitar', 'playing video games', 'spending time with family']} />
        <Person name="Juan Carlos" age="15" hobbies={['exercising', 'watching tv', 'eating']} />
        <Person name="Jayden" age="23" hobbies={['coding', 'playing video games', 'playing piano']} />

    </div>
)

ReactDOM.render(<App />, document.getElementById('root')); 