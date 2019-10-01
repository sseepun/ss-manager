
// Users
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["username", "password", "salt", "level", "firstname", "lastname", "email", "status"],
      uniqueItems: ["username", "email"],
      properties: {
        username: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        password: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        salt: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        level: {
          enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          description: "can only be one of the enum values and is required"
        },
        firstname: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        lastname: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        email: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        status: {
          enum: ['Ban', 'Pending', 'Active'],
          description: "can only be one of the enum values and is required"
        },
        temporarySalt: {
          bsonType: "string",
          description: "must be a string and is not required"
        }
      }
    }
  },
  validationAction: "warn"
});
db.createCollection("userDetail", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["userId"],
      properties: {
        userId: {
          bsonType: "objectId",
          description: "must be a ObjectId in users collection(_id) and is required"
        },
        profileUrl: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        about: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        gender: {
          enum: ['Male', 'Female', 'Other'],
          description: "can only be one of the enum values and is required"
        },
        phone: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        lineId: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        position: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        school: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        schoolAddress: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        workplace: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        workplaceAddress: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        education: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        major: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        dpstYear: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        zip: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        country: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        province: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        address1: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        address2: {
          bsonType: "string",
          description: "must be a string and is not required"
        }
      }
    }
  },
  validationAction: "warn"
});

// PDF forms
db.createCollection("formCategory", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["categoryTH", "categoryEN"],
      uniqueItems: ["categoryTH", "categoryEN"],
      properties: {
        categoryTH: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        categoryEN: {
          bsonType: "string",
          description: "must be a string and is required"
        }
      }
    }
  },
  validationAction: "warn"
});
db.createCollection("forms", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["creatorId", "category", "nameTH", "nameEN", "pdfForm", "requireEvidence", "accessCode", "status"],
      uniqueItems: ["nameTH", "nameEN", "accessCode"],
      properties: {
        creatorId: {
          bsonType: "objectId",
          description: "must be a ObjectId in users collection(_id) and is required"
        },
        category: {
          bsonType: "array",
          description: "must be an array of category in govFormCategory categoryEN and is requied"
        },
        nameTH: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        nameEN: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        previewUrl: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        pdfForm: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        requireEvidence: {
          bsonType: "boolean",
          description: "must be a boolean and is required"
        },
        accessCode: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        owner: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        status: {
          enum: ['Active', 'Inactive'],
          description: "can only be one of the enum values and is required"
        }
      }
    }
  },
  validationAction: "warn"
});
db.createCollection("submittedForms", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["userId", "formId", "formValue", "status"],
      properties: {
        userId: {
          bsonType: "objectId",
          description: "must be a ObjectId in users collection(_id) and is required"
        },
        formId: {
          bsonType: "formId",
          description: "must be a ObjectId in forms collection(_id) and is required"
        },
        formValue: {
          bsonType: "object",
          description: "must be an object and is requied"
        },
        evidences: {
          bsonType: "array",
          description: "must be an array of objects of name and file and is not required"
        },
        status: {
          enum: ['Not approved', 'Pending', 'Approved'],
          description: "can only be one of the enum values and is required"
        },
        approverId: {
          bsonType: "objectId",
          description: "must be a ObjectId in users collection(_id) and is not required"
        },
        approvedDate: {
          bsonType: "date",
          description: "must be a date and is not required"
        }
      }
    }
  },
  validationAction: "warn"
});

// Admin Privilege and Settings
db.createCollection("userLevel", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["level", "levelName", "access"],
      uniqueItems: ["level", "levelName"],
      properties: {
        level: {
          bsonType: "number",
          description: "must be a number and is required"
        },
        levelName: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        access: {
          bsonType: "array",
          description: "must be an array and is required"
        }
      }
    }
  },
  validationAction: "warn"
});
db.createCollection("pageModules", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["moduleId", "parentId", "moduleName"],
      uniqueItems: ["moduleId", "moduleName"],
      properties: {
        moduleId: {
          bsonType: "number",
          description: "must be a number and is required"
        },
        parentId: {
          bsonType: "number",
          description: "must be a number and is required"
        },
        moduleName: {
          bsonType: "string",
          description: "must be a string and is required"
        }
      }
    }
  },
  validationAction: "warn"
});


// Initialize admin privileges
db.userLevel.insert({"level": 10, "levelName": "Owner", 
  "access": [0]
});
db.userLevel.insert({"level": 9, "levelName": "Admin", 
  "access": [0]
});
db.userLevel.insert({"level": 8, "levelName": "Manager", 
  "access": [0]
});
db.userLevel.insert({"level": 7, "levelName": "Author", 
  "access": [0]
});

// Initialize page modules
db.pageModules.insert({"moduleId": 0, "parentId": 0, "moduleName": 'Admin Panel'});

// Initialize users
db.users.insert({
  username: "TofuMaster",
  password: "430ea75272ad84391a3d17ab9a2f0f4f6fbe90b4b7cea1e6e5f1e461bb9b252b7ec397ad6c378ddb22c77429c5ce7329bfc38492ba3a573fcd59c0a561476972",
  salt: "4f6d7987252a903e07b7763df07ab46b",
  level: 10,
  firstname: "Sarun",
  lastname: "Seepun",
  email: "sarun_sla@hotmail.com",
  status: "Active"
});
db.users.insert({
  username: "nui",
  password: "badc11358bb889bdd1ec674c606e66c87d3ca569475b09d99e0027a44976914ec25f526c7f7a2bfb3b56ff80936c0ea2d817956e2f65bbb22a9bda51fda004b0",
  salt: "6b0164bc5c1ad0020fd046bae81ea9ac",
  level: 9,
  firstname: "นพรัตน์",
  lastname: "ศรีเจริญ",
  email: "nsric@ipst.ac.th",
  status: "Active"
});
db.users.insert({
  username: "chinissai",
  password: "badc11358bb889bdd1ec674c606e66c87d3ca569475b09d99e0027a44976914ec25f526c7f7a2bfb3b56ff80936c0ea2d817956e2f65bbb22a9bda51fda004b0",
  salt: "6b0164bc5c1ad0020fd046bae81ea9ac",
  level: 8,
  firstname: "Chin",
  lastname: "Isradisaikul",
  email: "chinissai@hotmail.com",
  status: "Active"
});

// Initialize user detail
let user1 = db.users.findOne({ username: "TofuMaster" })._id;
db.userDetail.insert({
  userId: user1
});
let user2 = db.users.findOne({ username: "nui" })._id;
db.userDetail.insert({
  userId: user2
});
let user3 = db.users.findOne({ username: "chinissai" })._id;
db.userDetail.insert({
  userId: user3
});

// Initialize form category
db.formCategory.insert({
  categoryTH: 'แบบฟอร์มเข้าร่วมงาน',
  categoryEN: 'Attendance Forms'
});
db.formCategory.insert({
  categoryTH: 'แบบฟอร์มเบิกค่าใช้จ่าย',
  categoryEN: 'Disbursement Form'
});

db.forms.insert({
  creatorId: user1, category: ['Attendance Forms'],
  nameTH: 'แบบตอบรับ ประชุมชี้แจงมัธยม 9-10 พค',
  nameEN: 'Testing form 01',
  pdfForm: 'formpdfForm-1527995938423.pdf',
  requireEvidence: false,
  accessCode: 'form-1', status: 'Active'
});
db.forms.insert({
  creatorId: user1, category: ['Disbursement Form'],
  nameTH: 'แบบตอบรับ ประชุมชี้แจงมัธยม 20-21 พค',
  nameEN: 'Testing form 02',
  pdfForm: 'formpdfForm-1527995938424.pdf',
  requireEvidence: false,
  accessCode: 'form-2', status: 'Active'
});

