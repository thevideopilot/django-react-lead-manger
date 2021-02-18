from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Lead Viewset


class LeadViewSet(viewsets.ModelViewSet):
    """ 
        A query that grabs all the leads
    """
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = LeadSerializer

    # get leads for user
    def get_queryset(self):
        return self.request.user.leads.all

    # allows us to save the lead owner
    def perform_create(self, serilaizer):
        serilaizer.save(owner=self.request.user)
