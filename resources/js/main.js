/*function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}

window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	        document.getElementById("scrollBtn").style.display = "block";
	    } else {
	        document.getElementById("scrollBtn").style.display = "none";
	    }
	}
*/
function getbookingform() {

    var panel = document.getElementById("panel1");
    var form = document.getElementById("signinform");
    panel.style.display = "none";
    console.log(panel.style);
    if (panel.style.display = "none")
    {
        panel.style.display = "block";
        form.style.display = "none";
    } else {
       panel.style.display = "none";
       form.style.display = "block";
    }
}

function topFunction() {
	    document.body.scrollTop = 0;
	    document.documentElement.scrollTop = 0;
	}

function showMembers(){
  document.getElementById("member-list").style.display="block";
  document.getElementById("dashboard").style.display="none";
}

function showDashboard(){
  document.getElementById("member-list").style.display="none";
  document.getElementById("dashboard").style.display="block";

}

var app = new function() {
  this.el = document.getElementById('members');
  this.members = ['Francsis', 'Gerald', 'Esther', 'Sparta', 'Bavi', 'Isha', 'Pruyal', 'Irisqa', 'Luxmi'];
  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'member';
    if (data) {
      if (data > 1) {
        name = 'members';
      }
      el.innerHTML = "Total: "+data + ' ' + name ;
    } else {
      el.innerHTML = 'No ' + name;
    }
  };

  this.FetchAll = function() {
    var data = '';
    if (this.members.length > 0) {
      for (i = 0; i < this.members.length; i++) {
        data += '<tr>';
        data += '<td>' + this.members[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.members.length);
    return this.el.innerHTML = data;
  };
  this.Add = function () {
    el = document.getElementById('add-name');
    // Get the value
    var member = el.value;
    if (member) {
      // Add the new value
      this.members.push(member.trim());
      // Reset input value
      el.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };
  this.Edit = function (item) {
    var el = document.getElementById('edit-name');
    // Display value in the field
    el.value = this.members[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      var member = el.value;
      if (member) {
        // Edit value
        self.members.splice(item, 1, member.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };
  this.Delete = function (item) {
    // Delete the current row
    this.members.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };
}

app.FetchAll();
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}
