
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import *
from .models import *


class SchoolsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Schools.objects.all()
    serializer_class = SchoolsSerializer
    # permission_classes = [permissions.IsAuthenticated]


class PreAssessmentViewset(viewsets.ModelViewSet):
    queryset = Preassessment.objects.all()
    serializer_class = PreAssessmentSerializer

class PostAssessmentViewset(viewsets.ModelViewSet):
    queryset = Postassessment.objects.all()
    serializer_class = PostAssessmentSerializer


answerKey = {
    'q01_answer': 'b', 'q02_answer': 'b', 'q03_answer': 'a', 'q04_answer': 'c',
    'q05_answer': 'd', 'q06_answer': 'b', 'q07_answer': 'd', 'q08_answer': 'b',
    'q09_answer': 'd', 'q10_answer': 'a', 'q11_answer': '62', 'q12_answer': '20',
    'q13_answer': '42', 'q14_answer': 'Macy\'s', 'q15_answer': 'Three and 75/100', 'q16_answer': '',
    'q17_answer': '3.75', 'q18_answer': '21.25', 'q19_answer': 'Journeys', 'q20_answer': '5.00',
    'q21_answer': '5.00', 'q22_answer': '16.25'
}