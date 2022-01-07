import React from "react"

import styles from "./tag.module.scss"

// creates a hex colour code based on the name of a tag
var stringToColour = function(str: string) {
    var hash = 0;
    var i;
    for (i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}


const Tag = ({ name }: { name: string}): JSX.Element => {
    const colour = stringToColour(name)
    return (
        <div className={styles.tag} style={{backgroundColor: colour}}>
            {name}
        </div>)
}

export default Tag