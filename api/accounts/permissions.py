
from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsOwnerOrReadOnly(BasePermission):
    message = "You must be the author of the post to edit"
    def has_object_permission(self, request, view, obj):
        my_safe_method = ['GET','PUT']
        if request.method in my_safe_method:
            return True
        
        return obj.user == request.user.id