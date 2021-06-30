## Prerequisites

[Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)\
[Docker Desktop](https://www.docker.com/products/docker-desktop)\
[Azure Account](https://azure.microsoft.com/en-us/overview/)

# Getting Started

### Clone repo and create Docker image

1. Clone the repo
2. Open Docker
3. Go to Biztown directory in CLI
4. Build and tag Docker image: `docker build . -t ja-web-test:v1` <span style="font-weight: lighter">// Tag goes after the :<span>
   #### To test locally:
   1. Spin up the container: `docker run -p 3000:3000 ja-web-test:v1`
   2. View at [localhost:3000](http://localhost:3000/)  
      \*Note, backend not connected so school data won't populate and consequently won't be able to go to other pages

### Create and configure resource group and container registry

5. Log in to Azure on CLI: `az login` <span style="font-weight: lighter">// Opens browser</span>
6. Create a resource group: `az group create --name jaResourceGroup --location eastus`
7. Create a container registry: `az acr create --resource-group jaResourceGroup \ --name jaContainerRegistry --sku Basic` <span style="font-weight: lighter">// Returns CR object</span>
8. Log in to registry: `az acr login -n jaContainerRegistry` <span style="font-weight: lighter">// Returns `Login Successful`</span>
9. Set admin-enabled to true: `az acr update -n jaContainerRegistry --resource-group jaResourceGroup --admin-enabled true`
10. Retrieve passwords: `az acr credential show --resource-group jaResourceGroup --name jaContainerRegistry` <span style="font-weight: lighter">// Returns two passwords and a username</span>
11. Sign in to container registry: `docker login jaContainerRegistry.azurecr.io --username jaContainerRegistry` <span style="font-weight: lighter">// Returns password prompt</span>
12. Enter one of the passwords from \#11 <span style="font-weight: lighter">// Returns `Login Successful`</span>

### Prep local Docker image for Azure

13. Tag local Docker image for registry: `docker tag ja-web-test:v1 jaContainerRegistry.azurecr.io/ja-web-test:v1`/
14. Push image to registry: `docker push jaContainerRegistry.azurecr.io/ja-web-test:v1`
15. Verify push was successful: `az acr repository list -n jaContainerRegistry` <span style="font-weight: lighter">// Returns name of image</span>

### Create and configure App Service Plan and web app

16. Create a free App Service Plan: `az appservice plan create --name AppSvc-JA-plan --resource-group jaResourceGroup --is-linux -- sku FREE`
17. Create web app: `az webapp create --resource-group jaResourceGroup --plan AppSvc-JA-plan --name ja-web-test --deployment-container-image-name jaContainerRegistry.azurecr.io/ja-web-test:v1`
18. Set the WEBSITES_PORT environment variable as expected by the app code: `az webapp config appsettings set --resource-group jaResourceGroup --name ja-web-test --settings WEBSITES_PORT=3000` //Not sure about this
19. Get service principal of the assigned identity: `az webapp identity assign --resource-group jaResourceGroup --name ja-web-test --query principalId - -output tsv`
20. Retrieve subscription ID: `az account show --query id --output tsv`
21. Grant the web app permission to access the container registry: `az role assignment create --assignee <principal-id> --scope /subscriptions/<subscription-id>/resourceGroups/jaResourceGroup/providers/Microsoft.ContainerRegistry/registries/jaContainerRegistry --role "AcrPull"` <span style="font-weight: lighter">//Replace \<subscription-id\> and \<principal-id\> with outputs from \#19 and \#20</span>

### Deploy and test

22. Specify container registry and image to deploy for web app: `az webapp config container set --name ja-web-test --resource-group jaResourceGroup --docker-custom-image-name jaContainerRegistry.azurecr.io/ja-web-test:v1 --docker-registry-server-url https://jaContainerRegistry.azurecr.io` <span style="font-weight: lighter">// Web app should be running in container upon completion</span>
23. Test at [http://ja-web-test.azurewebsites.net](http://ja-web-test.azurewebsites.net) <span style="font-weight: lighter">//May take some time for the app to respond on first access; refresh if page browser times out</span>

<!-- To get Tenant-ID, run: `az account show` <span style="font-weight: lighter">// Copy returned 'homeTenantId' prop</span> -->
