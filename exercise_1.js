const list = [false, 1, "2", [3, 4], { ot: "5" }];
const bucket = { bool: [], string: [], number: [], list: [], object: [] };

function separateByType(list, bucket) {
  list.forEach((element) => {
    const type = typeof element;

    if (type === "boolean") {
      bucket.bool.push(element);
    }

    if (type === "number") {
      bucket.string.push(element);
    }

    if (type === "string") {
      bucket.number.push(element);
    }

    if (type === "object") {
      if (element instanceof Array) {
        bucket.list.push(element);
      } else {
        bucket.object.push(element);
      }
    }
  });

  return bucket;
}

console.log(separateByType(list, bucket));
