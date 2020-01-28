vertices = ["A", "B", "C", "D", "E", "A", "B", "C", "D", "E"]
edges = ["01", "12", "23", "34", "40", "05", "16", "27", "38", "49", "57", "58", "68", "69", "79" ]
let results = []

/*
var x = 1 ; 
var z = 2 ;

console.log(edges[1] === (x, z))
*/



// find verticesByChar(char) return array
function findVerticesByChar(char){
	var foundVertices = []
	vertices.map((item, i) => {
		if(item === char){foundVertices.push(i)}
	})
	return foundVertices
}
/*console.log(findVerticesByChar("A"))*/



// StringPop(string) return string
function stringPop(s){
	return s.substring(1,s.length)
}
/*console.log(stringPop("AZER"))*/


// check relation(int v1, v2) return boolean
function checkRelation(v1, v2){
	let result = false
	edges.map(edge => {
		if(edge == "" + v1 + v2 || edge == ""+ v2 + v1 ){
			result =  true
		}
	})
	return result
}

/*console.log(checkRelation(7,1))*/


// findNeigh(startPoint, forwardString, historyPath) return ?

function findNeigh(startPoint, forwardString, historyPath){
	if(forwardString === ""){
		historyPath.push(startPoint)
		results.push(historyPath)
	}
	else if (forwardString !== ""){
		let targets = findVerticesByChar(forwardString[0])
		/*console.log(targets)*/ // array
		/*console.log(historyPath)*/
		forwardString = stringPop(forwardString)
		targets.map(target => {
			if(checkRelation(target, startPoint)){
				findNeigh(target, forwardString, [...historyPath, startPoint])
			}
		})
	}

}


function main(){
	let string = 'ABBECCD'
	let startPoints = findVerticesByChar(string[0])
	string = stringPop(string)
	startPoints.map(startPoint => 
	{
		findNeigh(startPoint, string, [])
	})

/*	console.log(results)*/
	let result 
	if(results.length === 0 ){
		result = -1
	}
	else if(results.length === 1){
		result = results[0].join("")
	}
	else if (results.length >= 2 ){
		let minlength = results[0].length ;
		let index = 0
		results.map((array, i) => {
			if(array.length < minlength){
				minlength = array.length
				index = i
			}
		} )
		result = results[index].join("")
	}

	console.log(result)
}

main();
