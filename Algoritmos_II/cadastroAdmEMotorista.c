#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <conio.h>
#include <time.h>
#include <stdbool.h>
#include <unistd.h>

struct Driver {
    char name[50];
    char lastName[50];
    char cnh[11];
    char password[50];
    int registerNumber;
    int expiryDate;
    int expiryMonth;
    int expiryYear;
};

struct Adm {
    char admPassword[50];
    int admRegisterNumber;
};

    int count = 0;
    int countAdm = 0;
//-----------Procedimentos e funções -----------------------------//

void compareDays(int day, int month, int year); //Procedimento para validar datas
bool login(struct Adm *adm);
void admRegister(struct Adm *adm);

//---------------------Programa principal------------------------------//

int main() {
    int size = 1;
    int menuOption;
    struct Driver *driver = malloc(size * sizeof(struct Driver));
    struct Adm adm;

    int regNumber;
    char password[50];
    bool passwordIsValid = false;
 
    admRegister(&adm);
    if (login(&adm)) {
        printf("Login realizado com sucesso!\n");
        passwordIsValid = true;
    } 

    if (passwordIsValid == true){
    do{
      
        
        system("cls");
		printf("\n\n                |--------------------- MENU --------------------|  ");
		printf("\n\n                |           [1] Cadastrar motorista             |  ");
		printf("\n\n                |           [2] Listar motorista                |  ");
		printf("\n\n                |           [3] Remover motorista               |  ");
		printf("\n\n                |           [4] Pesquisar motorista             |  ");
		printf("\n\n                |           [5] Sair                            |  ");
		printf("\n\n                |-----------------------------------------------|   \n\n");
		
		
		printf("Escolha uma opção: ");
        scanf("%d", &menuOption);
        fflush(stdin);

        switch (menuOption) {
            
            //Cadastro do motorista
            case 1:
              
                printf("Digite o nome: ");
                fgets(driver[count].name, 50, stdin);
                fflush(stdin);

                printf("Digite o sobrenome: ");
                fgets(driver[count].lastName, 50, stdin);
                fflush(stdin);
            
           do {
                printf("Digite o número da CNH: ");
                scanf("%s", &driver[count].cnh);
                fflush(stdin);
            } while (strlen(driver[count].cnh) != 10);
            
                printf("Digite a data de vencimento da CNH (DD MM AAAA): ");
                scanf("%d %d %d", &driver[count].expiryDate, &driver[count].expiryMonth, &driver[count].expiryYear);
                compareDays(driver[count].expiryDate, driver[count].expiryMonth, driver[count].expiryYear);
                fflush(stdin);
              
                printf("Digite o número da matrícula: ");
                scanf("%d", &driver[count].registerNumber);
                fflush(stdin);
                
                printf("Digite a senha: ");
                scanf("%s", &driver[count].password);
                fflush(stdin);
                
                count++;

                if (count >= size) {
                    size *= 2;
                    driver = realloc(driver, size * sizeof(struct Driver));
                }
                printf("Motorista cadastrado com sucesso!");
                break;
                
            //Listar motoristas    
            case 2:
                for (int i = 0; i < count; i++) {
                    printf(" Nome: %s ", driver[i].name);
                    printf("\n Sobrenome: %s", driver[i].lastName);
                    printf("\n CNH: %s", driver[i].cnh);
                    printf("\n Data vencimento CNH: %d / %d / %d", driver[i].expiryDate, driver[i].expiryMonth, driver[i].expiryYear);
                    printf("\n Matrícula: %d", driver[i].registerNumber);
                }
                sleep(5);
                break;
                
            //Remover motorista
            case 3:
                int registerToRemove;
                printf("Digite o número da matrícula da pessoa que deseja remover: ");
                scanf("%d", &registerToRemove);
                fflush(stdin);

                for (int i = 0; i < count; i++) {
                    if (registerToRemove == driver[i].registerNumber) {
                        count--;
                        memmove(&driver[i], &driver[i + 1], (count - i) * sizeof(struct Driver));
                        printf("Motorista removido com sucesso!\n");
                        break;
                    }
                }
                break;
                
            //Pesquisar motorista
            case 4:
                int registerSearch;
                printf("Digite o número da matrícula para pesquisa: ");
                scanf("%d", &registerSearch);
                
                int found = 0;
                
                for (int i = 0; i < count; i++){
                    if (registerSearch == driver[i].registerNumber) {
                        printf("Motorista encontrado!");
                        printf("\n Nome: %s", driver[i].name);
                        printf("\n Sobrenome: %s", driver[i].lastName);
                        printf("\n CNH: %s", driver[i].cnh);
                        printf("\n Data vencimento CNH: %d / %d / %d", driver[i].expiryDate, driver[i].expiryMonth, driver[i].expiryYear);
                        printf("\n Matrícula: %d", driver[i].registerNumber);
                        found = 1;
                        break;
                    }
                }
                if (!found){
                    printf("Motorista não localizado");
                }
                break;
            
            //Sair
            case 5:
                printf("Saindo do sistema...");
                break;
            default:
                printf("Opcao invalida!\n");
        }
    } while (menuOption != 5);

    free(driver);}
   else {
        printf("Falha ao realizar login!\n");
        return 0;
   }
}

void compareDays(int day, int month, int year){
    time_t t = time(NULL);
    struct tm tm = *localtime(&t);
    
    if (year < tm.tm_year + 1900 ) {
      printf ("CNH vencida \n");
    } else if (year == tm.tm_year + 1900 && month < tm.tm_mon+1)
    { printf("CNH vencida \n");
        } else if (year == tm.tm_year + 1900 && month == tm.tm_mon+1 && day < tm.tm_mday) {
            printf("CNH vencida \n");
            } else if (year == tm.tm_year + 1900 && month == tm.tm_mon+1 && day == tm.tm_mday) {
            printf("CNH vence hoje \n");
            } 
              else {
                printf("A CNH é válida \n"); 
            }
}


bool login(struct Adm *adm) {
    int regNumber;
    char password[50];
    bool passwordIsValid = false;

    printf("|------------------------------- LOGIN ----------------------------------|\n");
    printf("Digite a matricula: ");
    scanf("%d", &regNumber);
    
 for (int i = 0; i < countAdm; i++){
        if (regNumber == adm[i].admRegisterNumber){ 
            printf("Digite a senha: ");
            scanf("%s", password);
            if (strcmp(password, adm[i].admPassword) == 0) {
                passwordIsValid = true;
                printf("Usuário logado! \n");
                break;
            } else {
                printf("Usuário ou senha incorretos! \n");
                passwordIsValid = false;
            }
        }
    }

    return passwordIsValid;
}

void admRegister(struct Adm *adm) {
    printf("|--------------------------------- CADASTRO DO ADMINISTRADOR -------------------------------|\n");   
    printf("Digite a matrícula do administrador: ");
    scanf("%d", &adm[countAdm].admRegisterNumber);
    printf("Cadastre uma senha: ");
    scanf("%s", &adm[countAdm].admPassword);
    countAdm++;
}