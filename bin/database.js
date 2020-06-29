const Sequelize = require('sequelize');
const CategorieUserModel = require('../models/categorie_user')
const CommissionModel = require('../models/commision')
const ConducteurModel = require('../models/conducteur')
const CountryModel = require('../models/country')
const CurrencyModel = require('../models/currency')
const FavoriteTrajetModel = require('../models/favorite_trajet')
const LocationVehiculeModel = require('../models/location_vehicule')
const MessageModel = require('../models/message')
const NoteModel = require('../models/note')
const NotificationModel = require('../models/notification')
const PayementMethodModel = require('../models/payement_method')
const RecuModel = require('../models/recu')
const RequeteModel = require('../models/requete')
const RequeteReservationModel = require('../models/requete_reservation')
const SettingModel = require('../models/setting')
const TransactionModel = require('../models/transaction')
const TypeVehiculeModel = require('../models/type_vehicule')
const TypeVehiculeRentalModel = require('../models/type_vehicule_rental')
const UserModel = require('../models/user')
const UserAppModel = require('../models/user_app')
const VehiculeModel = require('../models/vehicule')
const VehiculeRentalModel = require('../models/vehicule_rental')


const sequelize = new Sequelize('yobouma', 'dev', 'dev', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

const CategorieUser = CategorieUserModel(sequelize, Sequelize)
const Commission = CommissionModel(sequelize, Sequelize)
const Conducteur = ConducteurModel(sequelize, Sequelize)
const Country = CountryModel(sequelize, Sequelize)
const Currency = CurrencyModel(sequelize, Sequelize)
const FavoriteTrajet = FavoriteTrajetModel(sequelize, Sequelize)
const LocationVehicule = LocationVehiculeModel(sequelize, Sequelize)
const Message = MessageModel(sequelize, Sequelize)
const Note = NoteModel(sequelize, Sequelize)
const Notification = NotificationModel(sequelize, Sequelize)
const PayementMethod = PayementMethodModel(sequelize, Sequelize)
const Recu = RecuModel(sequelize, Sequelize)
const Requete = RequeteModel(sequelize, Sequelize)
const RequeteReservation = RequeteReservationModel(sequelize, Sequelize)
const Setting = SettingModel(sequelize, Sequelize)
const Transaction = TransactionModel(sequelize, Sequelize)
const TypeVehicule = TypeVehiculeModel(sequelize, Sequelize)
const TypeVehiculeRental = TypeVehiculeRentalModel(sequelize, Sequelize)
const User = UserModel(sequelize, Sequelize)
const UserApp = UserAppModel(sequelize, Sequelize)
const Vehicule = VehiculeModel(sequelize, Sequelize)
const VehiculeRental = VehiculeRentalModel(sequelize, Sequelize)

//Categories
CategorieUser.hasMany(User);
//Conducteur
Conducteur.hasMany(LocationVehicule);
Conducteur.hasMany(Message);
Conducteur.hasMany(Note);
Conducteur.hasMany(Recu);
Conducteur.hasMany(Requete);
Conducteur.hasMany(Vehicule);
Conducteur.hasMany(RequeteReservation);

FavoriteTrajet.belongsTo(UserApp, {
    foreignKey: {
        name: 'id_user_app',
        allowNull: false,
    }
});
LocationVehicule.belongsTo(VehiculeRental, {
    foreignKey: {
        allowNull: false,
    }
});
LocationVehicule.belongsTo(UserApp, {
    foreignKey: {
        allowNull: false,
    }
});

Message.belongsTo(Requete, {
    foreignKey: {
        allowNull: false,
    }
});
Message.belongsTo(UserApp, {
    foreignKey: {
        allowNull: false,
    }
});
Message.belongsTo(Conducteur, {
    foreignKey: {
        allowNull: false,
    }
});
//Note
Note.belongsTo(UserApp, {
    foreignKey: {
        allowNull: false,
    }
});
Note.belongsTo(Conducteur, {
    foreignKey: {
        allowNull: false,
    }
});
//Payement Methode
PayementMethod.hasMany(RequeteReservation);
PayementMethod.hasMany(Requete);

//Recu
Recu.belongsTo(UserApp, {
    foreignKey: {
        allowNull: false,
    }
});
Recu.belongsTo(Conducteur, {
    foreignKey: {
        allowNull: false,
    }
});

//Requete
Requete.belongsTo(UserApp, {
    foreignKey: {
        allowNull: false,
    }
});
Requete.belongsTo(Conducteur, {
    foreignKey: {
        allowNull: false,
    }
});
Requete.belongsTo(PayementMethod, {
    foreignKey: {
        allowNull: false,
    }
});

Requete.hasMany(Message)


RequeteReservation.belongsTo(UserApp, {
    foreignKey: {
        allowNull: false,
    }
});
RequeteReservation.belongsTo(Conducteur, {
    foreignKey: {
        allowNull: false,
    }
});
RequeteReservation.belongsTo(PayementMethod, {
    foreignKey: {
        allowNull: false,
    }
});

TypeVehicule.hasMany(Vehicule);
TypeVehiculeRental.hasMany(VehiculeRental);
User.belongsTo(CategorieUser)
//userAPP
UserApp.hasMany(FavoriteTrajet)
UserApp.hasMany(LocationVehicule)
UserApp.hasMany(Message)
UserApp.hasMany(Note)
UserApp.hasMany(Recu)
UserApp.hasMany(Requete)
UserApp.hasMany(RequeteReservation)
//Vehicule
Vehicule.belongsTo(Conducteur, {
    foreignKey: {
        allowNull: false,
    }
});

Vehicule.belongsTo(TypeVehicule, {
    foreignKey: {
        allowNull: false,
    }
});
//Vehicule Rental
VehiculeRental.belongsTo(TypeVehiculeRental, {
    foreignKey: {
        allowNull: false,
    }
});
module.exports = {
    sequelize,
    Sequelize,
    CategorieUser,
    Commission,
    Conducteur,
    Country,
    Currency,
    FavoriteTrajet,
    LocationVehicule,
    Message,
    Note,
    Notification,
    PayementMethod,
    Recu,
    Requete,
    RequeteReservation,
    Setting,
    Transaction,
    TypeVehicule,
    TypeVehiculeRental,
    User,
    UserApp,
    Vehicule,
    VehiculeRental,
}