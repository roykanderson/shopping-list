window.onload = init;

function init() {
    var input = document.getElementById("groceryInput");
    input.onkeypress = controller.addHandler;

    var clearButton = document.getElementById("clearbutton");
    clearButton.onclick = controller.clearHandler;
}

var view = {
    list: document.getElementById("list"),

    addLi: function(name) {
        if(name) {
            var newIndex = document.getElementsByTagName("li").length;
            var newItem = document.createElement("li");

            newItem.id = newIndex;
            newItem.onclick = controller.removeHandler;
            newItem.innerHTML = name;

            this.list.appendChild(newItem);
        }
    },

    removeLi: function(index) {
        var items = document.getElementsByTagName("li");
        if (items.length != 0) {
            items[index].remove();
            this.updateIndices();
        }
    },

    // takes in the index that was removed and updates li id's accordingly
    updateIndices() {
        items = document.getElementsByTagName("li");
        for (var i = items.length - 1; i >= 0; i--) {
            items[i].id = i;
        }
    }
};

var controller = {
    addHandler: function(e) {
        var input = e.target;
        if (e.keyCode === 13) {
            view.addLi(input.value);
            input.value = "";
        }
    },

    removeHandler: function(e) {
        var index = e.target.id;
        view.removeLi(index);
    },

    clearHandler: function() {
        var items = document.getElementsByTagName("li");
        for (var i = items.length - 1; i >= 0; i--) {
            items[i].remove();
        }
    }
}