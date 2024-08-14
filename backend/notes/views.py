# notes/views.py
from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from .models import Note
import json

@csrf_exempt
def create_note(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        note_id = Note.create(data.get('content', ''))
        return JsonResponse({'id': note_id}, status=201)
    return HttpResponseBadRequest()

def get_notes(request):
    if request.method == 'GET':
        notes = Note.get_all()
        return JsonResponse(notes, safe=False)

@csrf_exempt
def update_note(request, note_id):
    if request.method == 'POST':
        data = json.loads(request.body)
        success = Note.update(note_id, data.get('content', ''))
        return JsonResponse({'success': success})
    return HttpResponseBadRequest()

@csrf_exempt
def delete_note(request, note_id):
    if request.method == 'DELETE':
        success = Note.delete(note_id)
        return JsonResponse({'success': success})
    return HttpResponseBadRequest()
