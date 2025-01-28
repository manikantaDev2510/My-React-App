import "./Tables.css"
// From this we can import any file i imported css file

// In react We can do CSS in 3 Ways they are
// 1.Inline styling
// 2.CSS stylesheets
// 3.CSS Modules

function Tables() {
    return (
        <table>
            <tr>
                {/* These are 1.Inline Stylng */}
                <th style={{color:"red"}}>Company</th>
                <th style={{color:"red"}}>Contact</th>
                <th style={{color:"red"}}>Country</th>
            </tr>
            {/* These are 3.CSS Modules */}
            <tr style={styles.container}>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr style={table.container}>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
        </table>
    );
}


// CSS Modules
const styles={
    container:{
        color:"orange",backgroundColor:"yellow"
    }
}
const table={
    container:{
    backgroundColor:"aqua"
    }
}
export default Tables;