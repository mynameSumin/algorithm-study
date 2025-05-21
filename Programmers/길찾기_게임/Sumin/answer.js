class Node {
    constructor(key, num) {
        this.left = null;
        this.right = null;
        this.num = num;
        this.val = key;
    }
}

//이진 트리 탐색
class BST {
    constructor(){
        this.root = null;
    }
    
    insert(val, num) {
        if(!this.root){ //루트노드가 없는 경우
            this.root = new Node(val, num);
        } else {
            let curr = this.root;
            while(true){
                if(val > curr.val){ //값이 현재 노드보다 크다면
                    if(!curr.right){ //아직 right가 없다면
                        curr.right = new Node(val, num);
                        break;
                    } else {
                        curr = curr.right;
                    }
                } else { //값이 현재 노드보다 작다면
                    if(!curr.left){
                        curr.left = new Node(val, num);
                        break;
                    } else {
                        curr = curr.left;
                    }
                } 
            }
        }
    }
    
    search(key) {
        let curr = this.root;
        while(true){
            if(key < curr.val){ //값이 val보다 작다면
                if(curr.left){
                    curr = curr.left;
                } else {
                    return -1;
                }
            } else if(key > curr.val) {
                if(curr.right){
                    curr = curr.right;
                } else {
                    return -1;
                }
            } else {
            return curr;
            }
        }
    }
}

function solution(nodeinfo) {
    const bst = new BST();
    const temp = [...nodeinfo];
    temp.sort((a, b) => {
        return b[1] - a[1]; 
    })
    
    for(let i = 0; i < temp.length; i++){
        const num = nodeinfo.indexOf(temp[i]);
        bst.insert(temp[i][0], num + 1);
    }
    
    var answer = new Array(2).fill(true).map(() => []);
    const preorder = (node) => {
        answer[0].push(node.num);
        if(node.left) preorder(node.left);
        if(node.right) preorder(node.right);
    }
    
    const postorder = (node) => {
        if(node.left) postorder(node.left);
        if(node.right) postorder(node.right);
        answer[1].push(node.num);
    }
    preorder(bst.root);
    postorder(bst.root);
    return answer;
}