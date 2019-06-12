// Time complexity: O(n^2)
function findTriplets(arr, n) {
    arr.sort();
    var l = arr.length;
    for (var i = 0; i < l; i++) {
        var j = i + 1,
            k = l - 1;
        while (j < k) {
            if (arr[i] + arr[j] + arr[k] < n) {
                j++;
            } else if (arr[i] + arr[j] + arr[k] > n) {
                k--;
            } else {
                console.log(arr[i] + "," + arr[j] + "," + arr[k]);
                j++;
                k--;
            }
        }
    }
    return true;
}

var arr = [-1, -4, -9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
findTriplets(arr, 0);