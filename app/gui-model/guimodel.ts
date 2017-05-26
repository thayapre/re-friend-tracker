export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Noëls Friend Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
			{ 
			    "id": "nickname",
			    "type": "text",
			    "name": "Nickname",
		            "width": 2,
			    "required": true
			},
			{
                            "id":   "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "data": [ "Study", "Family","School"],
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "data": [ "Winterthur", "Zürich" ],
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id": "evtBirth",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
		{
                    "id": "GroupForm",
                    "title": "Group",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "GroupName",
                            "width": 2,
                            "required": true
                        },
			{
                            "id": "Creationdate",
                            "type": "date",
                            "name": "Creation Date",
                            "width": 1,
                            "required": true
			},
			{
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
		{
                    "id": "ActivityForm",
                    "title": "Activity",
                    "formFieldList": [
                        {
                            "id": "Name",
                            "type": "text",
                            "name": "Name",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "Date",
                            "type": "date",
                            "name": "Date",
                            "width": 1,
                            "required": true
			},
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "data": [ "Winterthur", "Zürich" ],
                            "form": "GroupForm",
                            "width": 2,
			    "required": true
                        },
			{
                            "id":   "Participants",
                            "type": "autocomplete",
                            "name": "Participants",
                            "data": [ "Anton", "Emilia","Peter"],
                            "form": "GroupForm",
                            "width": 2
			    "required": true
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "locationspage",
                        },
			{
			    "type": "button",
			    "name": "Groups",
			    "icon": "fa-weixin",
			    "color": "wisteria",
			    "page": "groupspage",
			},
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
			{
			    "type": "button",
			    "name": "Search",
			    "icon": "fa-search",
			    "color": "blue",
			},
                        {
			    "type": "button",
			    "name": "Anton Amacker",
			    "icon": "fa-male",
			    "color": "blue",
			    "page": "friendmanagepage",
			},
			{
			    "type": "button",
			    "name": "Britta Beavers",
			    "icon": "fa-female",
			    "color": "blue",
			    "page": "friendmanagepage",
			},
                    ]
                },
                {
                    "id": "friendmanagepage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "Edit Friend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
			{
                            "type": "newButton",
                            "name": "Ad Activity",
                            "icon": "fa-calendar",
                            "color": "red",
                            "form": {﻿export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Noëls Friend Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
			{ 
			    "id": "nickname",
			    "type": "text",
			    "name": "Nickname",
		            "width": 2,
			    "required": true
			},
			{
                            "id":   "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "data": [ "Study", "Family","School"],
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "data": [ "Winterthur", "Zürich" ],
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id": "evtBirth",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
		{
                    "id": "GroupForm",
                    "title": "Group",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "GroupName",
                            "width": 2,
                            "required": true
                        },
			{
                            "id": "Creationdate",
                            "type": "date",
                            "name": "Creation Date",
                            "width": 1,
                            "required": true
			},
			{
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
		{
                    "id": "ActivityForm",
                    "title": "Activity",
                    "formFieldList": [
                        {
                            "id": "Name",
                            "type": "text",
                            "name": "Name",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "Date",
                            "type": "date",
                            "name": "Date",
                            "width": 1,
                            "required": true
			},
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "data": [ "Winterthur", "Zürich" ],
                            "form": "GroupForm",
                            "width": 2,
			    "required": true
                        },
			{
                            "id":   "Participants",
                            "type": "autocomplete",
                            "name": "Participants",
                            "data": [ "Anton", "Emilia","Peter"],
                            "form": "GroupForm",
                            "width": 2
			    "required": true
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "locationspage",
                        },
			{
			    "type": "button",
			    "name": "Groups",
			    "icon": "fa-weixin",
			    "color": "wisteria",
			    "page": "groupspage",
			},
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
			{
			    "type": "button",
			    "name": "Search",
			    "icon": "fa-search",
			    "color": "blue",
			},
                        {
			    "type": "button",
			    "name": "Anton Amacker",
			    "icon": "fa-male",
			    "color": "blue",
			    "page": "friendmanagepage",
			},
			{
			    "type": "button",
			    "name": "Britta Beavers",
			    "icon": "fa-female",
			    "color": "blue",
			    "page": "friendmanagepage",
			},
                    ]
                },
                {
                    "id": "friendmanagepage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "Edit Friend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
			{
                            "type": "newButton",
                            "name": "Ad Activity",
                            "icon": "fa-calendar",
                            "color": "red",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-calendar",
                            "color": "red",
                            "search": true,
                            "data": [ { name: "Movie Why Him" }, { name: "Sports Tennis"}, { name: "Eating Pizza"} ],
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Adelboden" }, { name: "Winterthur" }, { name: "Zinal"}, { name: "Zürich"} ],
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                    ]
                },
		{ 
		    "id": "groupspage",
		    "elementList": [ 
			{
			    "type": "backbutton",
		},
		{
			    "type": "newButton",
			    "name": "NewGroup",
			    "icon": "fa-weixin",
			    "color": "green",
			    "form": {
			        "form": "GroupForm"
			    }
			},
		{
			    "type": "list",
			    "icon": "fa-weixin",
			    "color": "wisteria",
			    "search": true,
			    "data":[{name:"Study"},{name"Family"},{name"School"}],
			    "form": {
			        "form": "GroupForm"
			    }
			},
		    ]
		}
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}

                                "form": "ActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-calendar",
                            "color": "red",
                            "search": true,
                            "data": [ { name: "Movie Why Him" }, { name: "Sports Tennis"}, { name: "Eating Pizza"} ],
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Adelboden" }, { name: "Winterthur" }, { name: "Zinal"}, { name: "Zürich"} ],
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                    ]
                },
		{ 
		    "id": "groupspage",
		    "elementList": [ 
			{
			    "type": "backbutton",
		},
		{
			    "type": "newButton",
			    "name": "NewGroup",
			    "icon": "fa-weixin",
			    "color": "green",
			    "form": {
			        "form": "GroupForm"
			    }
			},
		{
			    "type": "list",
			    "icon": "fa-weixin",
			    "color": "wisteria",
			    "search": true,
			    "data":[{name:"Study"},{name"Family"},{name"School"}],
			    "form": {
			        "form": "GroupForm"
			    }
			},
		    ]
		}
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
