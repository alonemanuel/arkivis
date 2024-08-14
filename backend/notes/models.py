# notes/models.py
from mongo import db
from bson.objectid import ObjectId
from datetime import datetime

class Note:
    collection = db['notes']  # Accessing the 'notes' collection in MongoDB

    @staticmethod
    def create(content):
        note = {
            'content': content,
            'created_at': datetime.utcnow()
        }
        result = Note.collection.insert_one(note)
        return str(result.inserted_id)

    @staticmethod
    def get_all():
        notes = Note.collection.find()
        return [{'id': str(note['_id']), 'content': note['content'], 'created_at': note['created_at']} for note in notes]

    @staticmethod
    def get_by_id(note_id):
        note = Note.collection.find_one({'_id': ObjectId(note_id)})
        if note:
            return {'id': str(note['_id']), 'content': note['content'], 'created_at': note['created_at']}
        return None

    @staticmethod
    def update(note_id, content):
        result = Note.collection.update_one({'_id': ObjectId(note_id)}, {'$set': {'content': content}})
        return result.modified_count > 0

    @staticmethod
    def delete(note_id):
        result = Note.collection.delete_one({'_id': ObjectId(note_id)})
        return result.deleted_count > 0
