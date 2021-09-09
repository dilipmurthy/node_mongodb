import { 
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact
} from '../controllers/crmContoller';

const routes = (app) => {
  app
    .route('/contact')
    .get((req, res, next) => {
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)

    .post(addNewContact);

  app
    .route('/contact/:contactID')
    .get(getContactWithID)

    .put(updateContact)

    .delete(deleteContact);
};

export default routes;
