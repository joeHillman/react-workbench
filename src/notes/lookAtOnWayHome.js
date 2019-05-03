// object.taxonomy.primary_section.path

let data = [
  {
    taxonomy: {
      primary_section: {
        path: "/sports/baseball/redsox"
      }
    }
  },
  {
    taxonomy: {
      primary_section: {
        path: "/sports/baseball"
      }
    }
  },
  {
    taxonomy: {
      primary_section: {
        path: "/sports/basketball"
      }
    }
  },
  {
    taxonomy: {
      primary_section: {
        path: "/sports/baseball/redsox/"
      }
    }
  },
  {
    taxonomy: {
      primary_section: {
        path: "/sports/hockey"
      }
    }
  },
  {
    taxonomy: {
      primary_section: {
        path: "/sports/hockey/bruins"
      }
    }
  }
]

// object.taxonomy.primary_section.path

const checkSections = (arr) => {
  const sections = [];
  arr.forEach(function(item){
//     console.log(item)
    sections.push(item.taxonomy.primary_section.path);
  })
  console.log(sections, "Sections")
  return sections;
}

// console.log(checkSections(data))



const removeTrailingSlash = (str) => {
  let cleanStr = str;
  if(cleanStr[cleanStr.length - 1] === "/"){
    cleanStr = cleanStr.substring(0, cleanStr.length -1);
  }
  return cleanStr;
}

let nums = ["/sports/baseball/",
            "/history",
            "/politics",
            "/history",
            "/sports/baseball",
            "/sports/basketball",
            "/sports/baseball",
            "/sports/baseball/red-sox"
           ];


function count(arr) {
//     array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];


  let array_elements = []

  arr.map(item => {
    array_elements.push(removeTrailingSlash(item));
  });
//   let cleanArray = [];



  array_elements.sort();

  let sorted = [];

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                console.log(current + ' comes --> ' + cnt + ' times');
                sorted.push([current, cnt]);

            }
            current = array_elements[i];
            cnt = 1;
          console.log(sorted, "SORTED IN LOOP")
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        console.log(current + ' comes --> ' + cnt + ' times');
                sorted.push([current, cnt]);
//                 console.log(sorted, "SORTED");
    }
  console.log(sorted.sort((a, b) => { return a[1] - b[1]; }))
}

count(nums)

// const findDupes = (arr) => {
//   let normalized = [];
//   let copy;
//   let unique = [];
//   let dupes = [];

//   arr.map(item => {
//     normalized.push(removeTrailingSlash(item));
//   })
//   copy = normalized.slice();

// //  console.log(normalized)

//   copy.map((normalizedItem, index) => {
// //     console.log(copy);
//     let compare = copy.shift();
// //     console.log(compare, "THIS")
//     if(compare === normalizedItem) {
// //    console.log(copyItem, index, normalizedItem, "DUPE")
//       dupes.push(compare);
//       dupes.push(normalizedItem);
//     } else { unique.push(normalizedItem); }

//   })

//   /// if dupes contains unique, push to dupes

//   console.log(dupes, "dupes")
//   console.log(unique, "unique")
// }

// findDupes(nums);
// 1 2 3 4 5
// 5 4 3 2 1

// let testArray = [1, 2, 3, 3, 4, 3]
// let newTestSet = new Set(testArray);
// console.log([...newTestSet])
