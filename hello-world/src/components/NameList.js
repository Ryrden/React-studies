import React from "react";
import Person from "./Person";

function NameList() {
	const names = ["Bruce", "Clark", "Diana", "Bruce"];
	const persons = [
		{id: 1, name: "Bruce", age: 30, skill: "React"},
		{id: 2, name: "Clark", age: 25, skill: "Angular"},
		{id: 3, name: "Diana", age: 28, skill: "Vue"},
	];
	/*keys in react:
        1. A "key" is a special string attribute you need to include when creating list items.
        2. keys give the elements a stable identity
        3. Keys help react identify which items have changed, are added, or are removed.
        4. Help in efficient update of the user interface
    */
	const personList = persons.map((person) => <Person key={person.id} person={person} />);

	/* Problems to use index as key 
        1. Use keys as index in array cause serious UI problemns
        2. When an element is inserted on start of the list, the items values change with the key

        When to use index as a key?
        1. The items in your list do not have a unique id.
        2. The list is a static list and will not change
        3. The list will never be reordered or filtered
    
    */
	const nameList = names.map((name, index) => (
		<h2 key={index}>
			{index} {name}
		</h2>
	));
	//return <div>{personList}</div>;
	return <div>{nameList}</div>;
}

export default NameList;
