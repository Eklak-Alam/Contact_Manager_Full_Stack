package com.code.Service;

import com.code.Model.Contact;
import com.code.Repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactServiceImpl implements ContactService{

    @Autowired
    private ContactRepository contactRepository;

    @Override
    public Contact createContact(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public List<Contact> getContact() {
        return contactRepository.findAll();
    }

    @Override
    public Optional<Contact> getContactById(Long id) {
        return contactRepository.findById(id);
    }

    @Override
    public Contact updateContact(Long id, Contact contact) {
        return contactRepository.findById(id).map(existingContact -> {
            // Updating all fields carefully
            existingContact.setFirstName(contact.getFirstName());
            existingContact.setLastName(contact.getLastName());
            existingContact.setNumber(contact.getNumber()); // Ensure this field matches
            existingContact.setEmail(contact.getEmail());
            existingContact.setAddress(contact.getAddress());
            existingContact.setGender(contact.getGender());
            existingContact.setImageUrl(contact.getImageUrl());

            // Save the updated contact
            return contactRepository.save(existingContact);
        }).orElseThrow(() -> new RuntimeException("Contact not found with id " + id));
    }



    @Override
    public void deleteContact(Long id) {
        if (contactRepository.existsById(id)) {
            contactRepository.deleteById(id);
        }
        else {
            throw new RuntimeException("Contact not found with id " + id);
        }
    }
}
