// Exports can be done in 2 ways they are 
// Default Export
// Named Export



// Default Export

function Sample(){
    return(
        <div>
            <p className="p1"   style={{color:"red",backgroundColor:"blue"}}>This is For Default Export</p>
            <p className="p2" style={styles.container}>This is the task</p>
        </div>
    );
}

// JSX approach to style
const styles={
    container:{
        color:"orange",backgroundColor:"yellow"
    }
}

export default Sample;