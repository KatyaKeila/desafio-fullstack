import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { AppError } from "../../errors/appError";
import { IContactUpdateRequest } from "../../interfaces/contacts.interface";

const updateContactService = async (id: string, { name, email, telephone }: IContactUpdateRequest) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contactUpdated = await contactRepository.findOneBy({
    id: id
  })

  if (!contactUpdated) {
    throw new AppError('Contact not found')
  };

  await contactRepository.update(
    id,
    {
      name: name ? name : contactUpdated.name,
      email: email ? email : contactUpdated.email,
      telephone: telephone ? telephone : contactUpdated.telephone
    }
  );

  const updatedContact = await contactRepository.findOneBy({
    id: id
  });

  return updatedContact
};

export default updateContactService