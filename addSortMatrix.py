def traverse(data):
	check = []
	for a in range(0, len(data)):
		for b in range(0, len(data[a])):
			check.append(data[a][b])
	arr = []
	add = 0
	for i in range(0, len(data)):
		traversal = data[i]
		for j in range(0, len(traversal)):
			add += traversal[j]
		arr.append(add)
	for j in range(0, len(arr)):
		for k in range(0, len(arr)):
			if (arr[k] > arr[j]):
				larger = arr[k]
				arr[k] = arr[j]
				arr[j] = larger
	if (len(check) / len(arr) != len(arr)):
		return None
	return arr
			
travel = traverse([
	[1,1,1],
	[2,3,4],
	[8,7,6]
])
print(travel) #Output: [3, 12, 33]
