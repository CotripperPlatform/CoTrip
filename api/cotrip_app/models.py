from django.db import models


class User(models.Model):
    email = models.EmailField(max_length=200)
    password = models.CharField(max_length=100)
    profile = models.ForeignKey(
        Profile, on_delete=models.CASCADE, related_name='user')

    def __str__(self):
        # return super().__str__()
        return self.email
