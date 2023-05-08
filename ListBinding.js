class ListBinding {
    constructor(element) {
        this.listElement = element;
        // this.textList = ["decode", "bottle"];
        this.textList = [];
    }
    
    static createItem(text) {
        const li = document.createElement("li");
        li.textContent = text;
        return li;
    }

    update () {
        // remove all 
        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild);
        }

        // fill 
        for (const text of this.textList) {
            this.listElement.appendChild(ListBinding.createItem(text));
        }
    }

    add (text) {
        this.textList.push(text);
        this.update();
    }

    remove (index) {
        this.textList.splice(index, 1);
        this.update();
    }
}