from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'schools', views.SchoolViewSet)
router.register(r'assessments', views.AssessmentViewset)
# router.register(r'preassessment', views.PreAssessmentViewset)
# router.register(r'postassessment', views.PostAssessmentViewset)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
