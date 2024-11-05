package com.code.Service;

import com.code.Model.Contact;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ContactService {
    Contact createContact(Contact contact);
    List<Contact> getContact();
    Optional<Contact> getContactById(Long id);
    Contact updateContact(Long id, Contact contact);
    void deleteContact(Long id);
}
