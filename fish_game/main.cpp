#include <iostream>
#include <time.h>
#include <conio.h>

using namespace std;

enum eDir { STOP = 0, LEFT = 1, UPLEFT = 2, DOWNLEFT = 3, RIGHT = 4, UPRIGHT = 5, DOWNRIGHT = 6};

// Fish (single so far)
class cFish {
    private:
        int x, y;
        int originalX, originalY;
        eDir direction;
    public:
        cFish(int posX, int posY) {
            originalX = posX;
            originalY = posY;
            x = posX; y = posY;
            direction = STOP;
        }

        void Reset() {
            x = originalX; y = originalY;
            direction = STOP;
        }
        void changeDirection(eDir d) {
            direction = d;
        }
        void randomDirection() {
            direction = (eDir)((rand() % 6) + 1);
        }
        inline int getX() { return x; }
        inline int getY() { return y; }
        inline eDir getDirection() { return direction; }
        void Move() {
            switch (direction) {
                case STOP:
                    break;
                case LEFT:
                    x--;
                    break;
                case RIGHT:
                    x++;
                    break;
                case UPLEFT:
                    x--; y--;
                    break;
                case DOWNLEFT:
                    x--; y++;
                    break;
                case UPRIGHT:
                    x++; y--;
                    break;
                case DOWNRIGHT:
                    x++; y++;
                    break;
                default: 
                    break;
            }
        }
        friend ostream & operator<<(ostream & o, cFish c) {
            o << "Fish [" << c.x << "," << c.y << "][" << c.direction << "]";
            return o;
        }
};

// Boat
class cBoat {
    private:
        int x, y;
        int originalX, originalY;
    public:
        cBoat(){
            x = y = 0;
        }
        cBoat(int posX, int posY) : cBoat() {
            originalX = posX;
            originalY = posY;
            x = posX;
            y = posY;
        }
        inline void Reset() { x = originalX; y = originalY; }
        inline int getX() { return x; }
        inline int getY() { return y; }
        inline void moveLeft() { x++; }
        inline void moveRight() { x--; }
        friend ostream & operator<<(ostream & o, cBoat c) {
            o << "Boat [" << c.x << "." << c.y << "]";
            return o;
        }
};

class cGameManager {
    private:
        int width, height;
        int score;
        char left1, right1;
        bool quit;
        cFish * fish;
        cBoat * player;
    public:
        cGameManager(int w, int h) {
            srand(time(NULL));
            quit = false;
            left1 = 'a';
            right1 = 'd';
            score = 0;
            width = w; height = h;
            fish = new cFish(w / 2, h / 2);
            player = new cBoat(1, h / 2 -3);
        }
// Clear game //
        ~cGameManager() {
            delete fish, player;
        }
        void ScoreUp(cBoat * player){
            if(player == player)
                score++;
            
            fish->Reset();
            player->Reset();
        }
        void Draw() {
            system("cls");
            for(int i = 0; i < width + 2; i++)
                cout << "#";
            cout << endl;

            for(int i = 0; i < height; i++) {
                for (int j = 0; j < width; j++) {
                    int fishx = fish->getX();
                    int fishy = fish->getY();
                    int playerx = player->getX();
                    int playery = player->getY();

                    if(j == 0)
                        cout << "#";

                    if (fishx == j && fishy == i)
                        cout << "F"; //fish

                    else if (playery == j && playerx == i)
                        cout << "B"; //player/boat
                    else if (playerx == i && playery + 1 == j)
                        cout << "B";
                    else if (playerx == i && playery + 2 == j)
                        cout << "B";
                    else if (playerx == i && playery + 3 == j)
                        cout << "B";

                    else
                        cout << " ";
                    
                    if (j == width -1)
                        cout << "#";
                }
                cout << endl;
            }

            for (int i = 0; i < width + 2; i++)
                cout << "#";
            cout << endl;

            cout << "Score:" << score << endl;
        }
        void Input() {
            fish->Move();

            int fishx = fish->getX();
            int fishy = fish->getY();
            int playerx = player->getX();
            int playery = player->getY();

            if(_kbhit()) {
                char current = _getch();
                if(current == left1)
                    if(playerx > 0)
                        player->moveLeft();
                if(current == right1)
                    if(playerx + 4 < width)
                        player->moveRight();

                if(fish->getDirection() == STOP)
                    fish->randomDirection();

                if (current == 'q')
                    quit = true;
            }
    }
        void Logic() {
            int fishx = fish->getX();
            int fishy = fish->getY();
            int playerx = player->getX();
            int playery = player->getY();

        // Boat
        for (int i = 0; i < 4; i++)

        //left wall paddle
        for (int i = 0; i < 4; i++)
            if (fishx == playerx + 1)
                if (fishy == playery + i)
                    fish -> changeDirection((eDir)((rand() % 3) + 4));
            
        // right wall paddle
        for (int i = 0; i < 4; i++)
            if (fishx == playerx - 1 )
                if (fishy == playery + i)
                    fish->changeDirection((eDir)((rand() % 3) + 4));

        // bottom wall
        if (fishx == width - 1)
            fish->changeDirection(fish->getDirection() == DOWNRIGHT ? DOWNLEFT : UPLEFT);
        if (fishx == 0)
            fish->changeDirection(fish->getDirection() == UPRIGHT ? DOWNRIGHT : DOWNLEFT);
        if(fishy == playery)
            ScoreUp(player);
        

        
        // top wall

        // score 
        }
    void Run() {
        while (!quit) {
            Draw();
            Input();
            Logic();
        }
    }
};

int main() {

    cGameManager c(40, 20);
    c.Run();
    return 0;
};